export function getIconForForm(name) {
  let icon;
  switch (name) {
    case "firstName":
      icon = "fa-user";
      break;
    case "lastName":
      icon = "fa-user";
      break;
    case "email":
      icon = "fa-envelope";
      break;
    case "subject":
      icon = "fa-pen";
      break;
    case "message":
      icon = "fa-message";
      break;
  }
  return icon;
}
