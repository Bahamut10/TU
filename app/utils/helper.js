import { Alert } from "react-native";

export const formatDatetoIndonesia = (sourceDate) => {
  var dd = new Date(sourceDate);
  var year = dd.getFullYear();
  var month = dd.getMonth();
  var date = dd.getDate();
  var day = dd.getDay();

  switch (day) {
    case 0:
      day = "Minggu";
      break;
    case 1:
      day = "Senin";
      break;
    case 2:
      day = "Selasa";
      break;
    case 3:
      day = "Rabu";
      break;
    case 4:
      day = "Kamis";
      break;
    case 5:
      day = "Jumat";
      break;
    case 6:
      day = "Sabtu";
      break;
  }
  switch (month) {
    case 0:
      month = "Januari";
      break;
    case 1:
      month = "Februari";
      break;
    case 2:
      month = "Maret";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Mei";
      break;
    case 5:
      month = "Juni";
      break;
    case 6:
      month = "Juli";
      break;
    case 7:
      month = "Agustus";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "Oktober";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "Desember";
      break;
  }
  var display = `${day}, ${date} ${month} ${year}`;

  return display;
};

export const formatToShortDate = (sourceDate) => {
  const dd = sourceDate.split("T")[0];
  const date = dd.replace(/-/g, "/");

  return date;
};

export const alert = (title, message) => {
  Alert.alert(title, message, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};
