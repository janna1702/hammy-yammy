"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { apiService } from "../axios/api.service";
import { useState, useEffect, FC } from "react";

import "./LoginStyles.css";

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onLogin = async () => {
    const result = await apiService.login(login, password);
    console.log(result);
    if (result) {
      router.push("/game");
    }
  };
  const onRegister = () => {
    router.push("/registration");
  };

  return (
    <div className="flex flex-col bg-[url('/bg.png')]  rounded-3xl w-2/5 h-5/6 items-center justify-center ">
      <div className="w-full p-40">
        <Form
          name="normal_login"
          className="flex flex-col gap-5"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
        >
          <div>
            <Form.Item
              name="username"
              //   rules={[
              //     { required: true, message: "Please input your Username!" },
              //   ]}
            >
              <Input
                value={login}
                onInput={(event: any) => setLogin(event.target.value)}
                className="rounded-xl h-11"
                prefix={
                  <UserOutlined className="site-form-item-icon text-[rgb(252,175,86)]" />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              //   rules={[
              //     { required: true, message: "Please input your Password!" },
              //   ]}
            >
              <Input
                value={password}
                onInput={(event: any) => setPassword(event.target.value)}
                className="rounded-xl h-11"
                prefix={
                  <LockOutlined className="site-form-item-icon text-[rgb(252,175,86)]   " />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <div className="flex flex-col gap-3 items-center ">
                <Button
                  onClick={onLogin}
                  style={{ backgroundColor: "rgb(252,175,86)" }}
                  type="primary"
                  htmlType="submit"
                  className="w-full h-9 text-lg rounded-xl  "
                >
                  Log in
                </Button>
                {/* Or <a href="">register now!</a> */}
                <Button
                  onClick={onRegister}
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderColor: "rgb(252,175,86)",
                  }}
                  htmlType="submit"
                  className="joinBtn"
                  //   className="w-full h-9 text-lg rounded-xl  "
                >
                  Join
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
