"use client";
import React from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider } from "antd";
import { apiService } from "../axios/api.service";
import { useRouter } from "next/navigation";
import { useState, useEffect, FC } from "react";
import "./GameStyles.css";

const colors2 = ["#ff862f", "#fcaf56", "#fcaf56", "#ff862f"];

const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

export function GamePage() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const onGame = async () => {
    const result = await apiService.tap(token);
    if (result) {
      // router.push("/");
    }
  };
  const onScore = () => {
    router.push("/score");
  };

  return (
    <div className="flex flex-col bg-[rgb(228,216,199)] rounded-3xl w-2/5 h-5/6 items-center justify-center ">
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(90deg,  ${colors2.join(", ")})`,
              colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                colors2
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                colors2
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button
          onClick={onScore}
          style={{
            width: "60px",
            height: "60px",
            borderColor: "rgb(252,175,86)",
            fontSize: "30px",
          }}
          className="gameBtn"
          type="primary"
          size="large"
        >
          ✭
        </Button>
        <div className="flex flex-col items-center gap-20">
          <img className="hamsterImg " src="./hamster.png" />

          <Button
            onClick={onGame}
            style={{
              width: "200px",
              height: "60px",
              borderColor: "rgb(252,175,86)",
            }}
            className="gameBtn"
            type="primary"
            size="large"
          >
            GAME
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
}
