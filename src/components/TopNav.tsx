import React from 'react';
import { Navbar, Button } from "@blueprintjs/core";
import {useNavigate} from "react-router-dom";
const pages = [
            {
                title: "List Rooms",
                link: "/rooms",
            }]

const TopNav: React.FC = () => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate({
            pathname: path,
        });
    };
    return (
        <Navbar fixedToTop={true}>
                <Navbar.Heading>
                    <a href={"/"} style={{ color: "inherit", textDecoration: "none" }}>
                        <b>D&D Bot Admin</b>
                    </a>
                </Navbar.Heading>
                <Navbar.Divider />
                {pages.map((page) => {
                    return (
                        <Button
                            minimal={true}
                            key={page.title}
                            text={page.title}
                            onClick={() => {
                                navigateTo(page.link);
                            }}
                        />
                    );
                })}
                <Navbar.Divider />
        </Navbar>
    );
};

export default TopNav;