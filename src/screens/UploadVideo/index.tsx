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
      const formData = new FormData();
      formData.append("title", videoTitle);
      formData.append("description", videoDescription);
      formData.append("file", videoFile);
      formData.append("courseName", courseName);

      // Replace `YOUR_YOUTUBE_API_KEY` with your actual YouTube Data API key
      const apiKey = "YOUR_YOUTUBE_API_KEY";

      // Make a POST request to the YouTube Data API
      const response = await fetch(
        `https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status&key=${apiKey}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with OAuth 2.0 access token
          },
          body: JSON.stringify({
            snippet: {
              title: videoTitle,
              description: videoDescription,
              tags: [courseName],
            },
            status: {
              privacyStatus: "public",
            },
          }),
        }
      );

      if (response.ok) {
        alert("Video uploaded successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error uploading video:", errorData);
        alert("Failed to upload video. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error:", error);
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
