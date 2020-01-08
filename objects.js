var playlist = {
  davidwise: "stickerbrush symphony"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}