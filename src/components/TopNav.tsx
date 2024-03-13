import React from 'react';
import { map } from "lodash";
import { Alignment, Classes, Divider, H6, Navbar, Button, NavbarGroup, NavbarHeading, NavbarDivider } from "@blueprintjs/core";
import {useNavigate} from "react-router-dom";
const pageGroups = [
    {
        group_title: "Rooms",
        sub_pages: [
            {
                title: "List Rooms",
                link: "/rooms",
            },
        ],
    }]

const TopNav: React.FC = () => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate({
            pathname: path,
        });
    };
    return (
        <div
            style={{
                margin: "auto",
                minHeight: "100vh",
                display: "grid",
                gridTemplateColumns: "300px 1fr",
            }}
        >
            {map(pageGroups,
                (group: any, groupIdx: number) => (
                    <div key={group.group_title}>
                        {groupIdx > 0 && <Divider/>}
                        <H6>{group.group_title}</H6>
                        <ul className={Classes.LIST_UNSTYLED}>
                            {map(group.sub_pages,
                                (page) => (
                                    <Button
                                        minimal={true}
                                        key={page.title}
                                        text={page.title}
                                        onClick={() => {
                                            navigateTo(page.link);
                                        }}
                                    />
                                ),
                            )}
                        </ul>
                    </div>
                ),
            )}
        </div>
    );
};

export default TopNav;