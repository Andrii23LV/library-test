import BookList from "@/components/BookList";
import Image from "next/image";

export default function Library() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <BookList />
        </main>
    );
}
