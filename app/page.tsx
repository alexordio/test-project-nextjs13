import Sidebar from "@/components/sidebar";
import NotesContainer from "@/components/notesContainer";

export default function Home() {
  return (
    <main className="flex w-full">
      <Sidebar></Sidebar>
      <NotesContainer></NotesContainer>
    </main>
  );
}
