import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea}  from "../../components/ui/textarea";

const UploadVideo: React.FC = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [courseName, setCourseName] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!videoTitle || !videoDescription || !videoFile || !courseName) {
      alert("Please fill in all fields and upload a video file.");
      return;
    }

    setUploading(true);

    try {
      // Fetch the access token from the API
      const tokenResponse = await fetch(
        "https://developers.google.com/oauthplayground/#step3&apisSelect=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube&auth_code=4%2F0Ab_5qlk7csKbGpPeWAu4bFSi-ZLYRNQZOyJ3xgejxeinoAi9ftiUAibstGjwAPU3dQAnbA&refresh_token=1%2F%2F04W3FLdAoNSX-CgYIARAAGAQSNwF-L9IrZ18M6zZ7O3CnT-Irn6wr1LS9bTlg2im8ea8zrnsVu509RR9OxhqwXrTyAMIQAUZjQbc&access_token_field=ya29.a0AZYkNZhvZD2WxG5C-GoXD4S5fF3PsUPBATu0NM5BTfQaS8ag25671wJsz5mMIsZ83mDLSnNhbSoFQM23spsd2vHXtV66p3f4SIe6d6rjnnxMBOWBaVOEnWcVsedJNIQRSW-Dub6PZKaJhX2OCBgLMEmJ5tUCg4m-VQdgKoDvLwaCgYKAWMSARYSFQHGX2MiS8Vx4OiBfh9T1qg39NLJQA0177&url=https%3A%2F%2F&content_type=application%2Fjson&http_method=GET&useDefaultOauthCred=unchecked&oauthEndpointSelect=Google&oauthAuthEndpointValue=https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fv2%2Fauth&oauthTokenEndpointValue=https%3A%2F%2Foauth2.googleapis.com%2Ftoken&expires_in=3598&access_token_issue_date=1745310092&for_access_token=ya29.a0AZYkNZhvZD2WxG5C-GoXD4S5fF3PsUPBATu0NM5BTfQaS8ag25671wJsz5mMIsZ83mDLSnNhbSoFQM23spsd2vHXtV66p3f4SIe6d6rjnnxMBOWBaVOEnWcVsedJNIQRSW-Dub6PZKaJhX2OCBgLMEmJ5tUCg4m-VQdgKoDvLwaCgYKAWMSARYSFQHGX2MiS8Vx4OiBfh9T1qg39NLJQA0177&includeCredentials=checked&accessTokenType=bearer&autoRefreshToken=checked&accessType=offline&prompt=consent&response_type=code&wrapLines=on",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: "97741672757-1dnr28tgtvj2klp6bpk6cjs0l07ibeae.apps.googleusercontent.com",
            client_secret: "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",
            refresh_token: "1//04W3FLdAoNSX-CgYIARAAGAQSNwF-L9IrZ18M6zZ7O3CnT-Irn6wr1LS9bTlg2im8ea8zrnsVu509RR9OxhqwXrTyAMIQAUZjQbc",
            grant_type: "refresh_token",
          }),
        }
      );

      if (!tokenResponse.ok) {
        const error = await tokenResponse.json();
        console.error("Error fetching access token:", error);
        alert("Failed to fetch access token.");
        return;
      }

      const { access_token: accessToken } = await tokenResponse.json();

      const metadata = {
        snippet: {
          title: videoTitle,
          description: videoDescription,
          tags: [courseName],
        },
        status: {
          privacyStatus: "public", // can be "unlisted" or "private"
        },
      };

      const form = new FormData();
      form.append("snippet", JSON.stringify(metadata));
      form.append("video", videoFile);

      const response = await fetch(
        "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(metadata),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Error initiating upload:", error);
        alert("Failed to initiate upload.");
        return;
      }

      const uploadUrl = response.headers.get("Location");
      if (!uploadUrl) {
        alert("Failed to get upload URL.");
        return;
      }

      // Upload the actual file to the upload URL
      const uploadResponse = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
          "Content-Length": videoFile.size.toString(),
        },
        body: videoFile,
      });

      if (uploadResponse.ok) {
        alert("Video uploaded successfully!");
        window.location.href = "/courses"; // Redirect to My Courses page
      } else {
        const uploadError = await uploadResponse.json();
        console.error("Upload failed:", uploadError);
        alert("Video upload failed.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An error occurred while uploading the video.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f7ff] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-['Poppins',Helvetica] font-bold text-[#2f327d] text-4xl md:text-5xl mb-6">
              Upload a Video to <span className="text-[#f48c06]">YouTube</span>
            </h1>
            <p className="font-['Nunito_Sans',Helvetica] font-normal text-lg md:text-xl text-[#696983] mb-12">
              Share your course content with the world by uploading your video directly to YouTube.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#2f327d] mb-6">Upload Video</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#696983] mb-2">
                  Video Title
                </label>
                <Input
                  type="text"
                  placeholder="Enter video title"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#696983] mb-2">
                  Video Description
                </label>
                <Textarea
                  placeholder="Enter video description"
                  value={videoDescription}
                  onChange={(e) => setVideoDescription(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#696983] mb-2">
                  Course Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter course name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#696983] mb-2">
                  Video File (MP4 format)
                </label>
                <Input
                  type="file"
                  accept="video/mp4"
                  onChange={handleFileChange}
                  className="w-full"
                />
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="bg-[#3465e1] text-white hover:bg-[#2854c8] w-full"
                >
                  {uploading ? "Uploading..." : "Upload Video"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadVideo;
