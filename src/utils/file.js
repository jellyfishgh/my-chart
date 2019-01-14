module.exports.getFileName = file =>
  file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'))
