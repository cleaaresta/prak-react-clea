import ErrorPage from "./ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      errorDescription="Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan."
      errorImage="https://http.cat/404"
    />
  );
}
