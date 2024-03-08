import Sidebar from "@/components/sidebar";
import NotesContainer from "@/components/notesContainer";

export default function Home({params: {type}}: any) {
  return (
    <main className="flex w-full">
      <Sidebar></Sidebar>
      <NotesContainer type={type}></NotesContainer>
    </main>
  );
}