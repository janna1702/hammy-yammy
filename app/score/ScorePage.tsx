"use client";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import { apiService } from "../axios/api.service";
const { Title } = Typography;

interface UserItem {
  login: string;
  hamsters: number;
}
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

export function ScorePage() {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = async () => {
    const result = await apiService.leaderBoard();

    if (result) {
      const users = result.data.rows;
      setData(users);
    }
  };

  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (
      Math.abs(
        e.currentTarget.scrollHeight -
          e.currentTarget.scrollTop -
          ContainerHeight
      ) <= 1
    ) {
      appendData();
    }
  };
  return (
    <div className="flex flex-col  overflow-hidden relative bg-[rgb(228,216,199)] rounded-3xl w-2/5 h-5/6 items-center justify-center p-10">
      <div className=" top-0  absolute h-36 rounded-b-[120px]  flex items-center justify-center bg-[rgb(252,175,86)] w-full">
        <Title style={{ color: "white" }} level={2}>
          LEADERBOARD
        </Title>
      </div>
      <div className="w-full pt-[90px] ">
        <List>
          <VirtualList
            className="p-10"
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey="email"
            onScroll={onScroll}
          >
            {(item: UserItem) => (
              <List.Item key={item.login}>
                <List.Item.Meta
                  avatar={<Avatar src="./hamster.png" />}
                  title={
                    <a
                      href="https://ant.design"

                      //"rgb(252,175,86)"
                    >
                      {item.login}
                    </a>
                  }
                  // description={item.email}
                />
                <div>{item.hamsters}</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </div>
    </div>
  );
}
