
import { useState } from "react";
import { Head } from "@inertiajs/react";
import LayoutApp from "@/Layouts/LayoutApp.jsx";
import Navbar from "@/partials/Navbar.jsx";
import Layout3Grid from "@/Layouts/Layout3Grid.jsx";
import Leaderboard from "@/Components/Leaderboard.jsx";
import QuestionsListCard from "../Components/QuestionsListCard.jsx";
import TopicsCategory from "@/Components/TopicsCategory.jsx";
import Footer from "@/partials/Footer.jsx";
import ToolipBtn from "@/Components/Buttons/ToolipBtn.jsx";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <Head title="Home" />
            <LayoutApp>
                <Navbar onSearch={setSearchQuery} />
                <Layout3Grid>
                    <TopicsCategory />
                    <QuestionsListCard searchQuery={searchQuery} />
                    <Leaderboard />
                </Layout3Grid>
                <ToolipBtn />
                <Footer />
            </LayoutApp>
        </>
    );
}
