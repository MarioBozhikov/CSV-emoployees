
const fileFunction = (event: any) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.type === "dragover" || event.type === "dragenter") {
    event.dataTransfer.dropEffect = "copy";
  } else if (event.type === "dragleave") {
    event.dataTransfer.dropEffect = "none";
  }
};

export default fileFunction