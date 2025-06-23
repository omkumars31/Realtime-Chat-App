const ImageUploader = () => {
  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'your-cloud-name', // 🔁 Replace with actual cloud name
        uploadPreset: 'your-upload-preset', // 🔁 Replace with actual preset
        sources: ['local', 'url', 'camera'],
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Uploaded image URL:', result.info.secure_url);
        }
      }
    );
  };

  return (
    <button
      onClick={handleUpload}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Upload Image
    </button>
  );
};

export default ImageUploader;
