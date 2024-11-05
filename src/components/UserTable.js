import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
} from "@mui/material";

const generateRandomUserData = () => {
  const userNames = ["カツオ", "ワカメ", "サザエ", "フネ", "タラオ", "波平", "マスオ"];
  const addresses = [
    "東京都千代田区丸の内1丁目1-1",
    "東京都中央区銀座3丁目3-3",
    "東京都港区六本木4丁目4-4",
    "東京都新宿区新宿5丁目5-5",
    "東京都文京区本郷6丁目6-6",
    "東京都台東区上野7丁目7-7",
    "東京都墨田区押上8丁目8-8",
    "東京都江東区豊洲9丁目9-9",
    "東京都品川区大井町10丁目10-10",
    "東京都目黒区中目黒1丁目11-11"
    ];

  return Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    userName: userNames[Math.floor(Math.random() * userNames.length)],
    address: addresses[Math.floor(Math.random() * addresses.length)],
  }));
};

const UserTable = () => {
  const [users, setUsers] = useState(generateRandomUserData());
  const [checkedUsers, setCheckedUsers] = useState([]);

  const handleCheckboxToggle = (userId) => {
    setCheckedUsers((prevCheckedUsers) =>
      prevCheckedUsers.includes(userId)
        ? prevCheckedUsers.filter((id) => id !== userId)
        : [...prevCheckedUsers, userId]
    );
  };

  const handleActionClick = (event, userId) => {
    event.stopPropagation(); // ボタンのクリックが行全体に伝わらないようにする
    alert(`ーザーID ${userId} に対して実行されました`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                "&:hover": { backgroundColor: "#f5f5f5" },
                cursor: "pointer",
              }}
              onClick={() => handleCheckboxToggle(user.id)}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={checkedUsers.includes(user.id)}
                />
              </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(event) => handleActionClick(event, user.id)}
                >
                  アクション
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
