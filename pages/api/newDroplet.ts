export default async function handler(req, res) {
  console.log("Hello");
  const { createdByUserId, title, audioTrack, isReply } = req.body;
  const droplet = {
    createdByUserId,
    title,
    audioTrack,
    isReply,
  };
  try {
    const response = {};
    res.status(200).json({ message: response });
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json(error);
  }
}
