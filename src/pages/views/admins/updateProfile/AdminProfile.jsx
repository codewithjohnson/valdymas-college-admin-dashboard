import React, { useState, lazy } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../../../components/tabs/TabPanel";
import Loadable from "../../../../components/loadable/Loadable";
const ChangePassword = Loadable(lazy(() => import("../changePwd/ChangePwd")));

const AdminProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingTop: "20px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons="auto"
        >
          <Tab
            label="profile"
            // icon={<span className="material-symbols-outlined ">person</span>}
            iconPosition="start"
            {...a11yProps(0)}
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          />
          <Tab
            label="change password"
            // icon={<span className="material-symbols-outlined">lock</span>}
            iconPosition="start"
            {...a11yProps(1)}
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
    </Box>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default AdminProfile;
