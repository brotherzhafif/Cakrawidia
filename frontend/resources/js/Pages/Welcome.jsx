
import { useState } from "react";
import { Head } from "@inertiajs/react";
import LayoutApp from "frontend/resources/js/Layouts/LayoutApp.jsx";
import Navbar from "frontend/resources/js/partials/Navbar.jsx";
import Layout3Grid from "frontend/resources/js/Layouts/Layout3Grid.jsx";
import Leaderboard from "frontend/resources/js/Components/Leaderboard.jsx";
import QuestionsListCard from "../Components/QuestionsListCard.jsx";
import TopicsCategory from "frontend/resources/js/Components/TopicsCategory.jsx";
import Footer from "frontend/resources/js/partials/Footer.jsx";
import ToolipBtn from "frontend/resources/js/Components/Buttons/ToolipBtn.jsx";

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
