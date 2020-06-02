const socket = io();

socket.on("connect", () => {
  console.log("You are connected");
});

socket.on("disconnect", () => {
  console.log(`Server is disconnected`);
});
