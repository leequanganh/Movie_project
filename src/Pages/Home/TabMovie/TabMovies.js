import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lichChieuHeThongRapAction } from "../../../Redux/Actions/filmAction";
import DetailTap from "./DetailTap";
const { TabPane } = Tabs;
export default function TabMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lichChieuHeThongRapAction());
  }, []);
  let { listPhimHeThongRap } = useSelector((state) => state.filmReducer);
  console.log(listPhimHeThongRap);
  const renderContent = () => {
    return (
      <Tabs
        id="lich_chieu"
        className="tabmovie"
        defaultActiveKey="1"
        tabPosition="left"
      >
        {listPhimHeThongRap?.map((heThongRap, index) => {
          return (
            <TabPane
              key={index}
              tab={
                <div>
                  <img
                    className=" w-20 h-20 object-cover"
                    src={heThongRap.logo}
                    alt="logo"
                  />
                  <span>{heThongRap.maHeThongRap}</span>
                </div>
              }
            >
              <Tabs tabPosition="left" className=" h-screen scroll-smooth">
                {heThongRap.lstCumRap.map((cumRap, index) => {
                  return (
                    <TabPane
                      key={index}
                      tab={
                        <div className="flex flex-col items-start">
                          <p className=" text-red-500 text-lg font-medium">
                            {cumRap.tenCumRap}
                          </p>
                          <p className=" text-gray-600">{cumRap.diaChi}</p>
                        </div>
                      }
                    >
                      <DetailTap data={cumRap} />
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
          );
        })}
      </Tabs>
    );
  };
  return <div className=" max-w-7xl mx-auto">{renderContent()}</div>;
}
