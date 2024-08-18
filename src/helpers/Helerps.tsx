export const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=14Sxh1DOvkSSFxQ9hqdg9WdnXlEGbXn9I"; // Direct download link
    link.download = "Aman_Punetha_Resume.pdf"; // The filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export const redirectToExternalLink = () =>{
    window.open("https://github.com/codewithpunetha?tab=repositories", "_blank");
}


export type Theme = "light" | "dark";

export interface NavbarProps {
  theme: Theme;
  setTheme: (theme: "light" | "dark") => void;
}