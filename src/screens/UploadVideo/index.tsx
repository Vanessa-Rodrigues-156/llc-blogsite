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
  
    const accessToken = prompt("Paste your OAuth 2.0 access token here:");
    if (!accessToken) {
      alert("Access token is required!");
      return;
    }
  
    setUploading(true);
  
    try {
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
  
      //const boundary = "foo_bar_baz"; // arbitrary boundary
  
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
