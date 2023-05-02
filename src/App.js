import React, { useEffect, useState } from "react";
import { ConfigProvider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { fetchSongs } from './integrations/SongAPI';
import { PRIMARY_COLOR } from './defaults/Colors';

import HomeComponent from "./components/home";
import Header from "./components/header/header.component";

import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const response = await fetchSongs();
      setSongs(response);

      setIsLoading(false);
    })();
  }, []);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY_COLOR,
        },
      }}
    >
      <Header setSongs={setSongs} />
      <Spin spinning={isLoading} indicator={antIcon}>
        <HomeComponent songs={songs} />
      </Spin>
    </ConfigProvider>
  );
};

export default App;
