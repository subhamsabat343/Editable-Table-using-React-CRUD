import "./App.css";
import "antd/dist/antd.css";
import { Table, Modal, Button } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const [isEditng, setIsEditing] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      bookname: "The White Tiger",
      authername: "Aravinda Arora",
      nop: 500,
      price: 120.0,
      dop: "23-06-2000",
    },
    {
      id: 2,
      bookname: "Physics",
      authername: "Hc Verma",
      nop: 673,
      price: 620.0,
      dop: "03-11-2013",
    },
    {
      id: 3,
      bookname: "Math",
      authername: "R.D. Sharma",
      nop: 1296,
      price: 980.0,
      dop: "29-04-2000",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Book Name",
      dataIndex: "bookname",
    },
    {
      key: "3",
      title: "Auther Name",
      dataIndex: "authername",
    },
    {
      key: "4",
      title: "No of pages",
      dataIndex: "nop",
    },
    {
      key: "5",
      title: "Price",
      dataIndex: "price",
    },
    {
      key: "6",
      title: "Date of Publication",
      dataIndex: "dop",
    },
    {
      key: "7",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{ color: "green" }}
              onClick={() => {
                onEditBook(record);
              }}
            />
            <DeleteOutlined
              onClick={() => onDeleteBook(record)}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const onAddBook = () => {
    const randomnumber = parseInt(Math.random() * 1000);
    const newBook = {
      id: randomnumber,
      bookname: "BookName " + randomnumber,
      authername: randomnumber + " Hc Verma",
      nop: 100,
      price: 100.0,
      dop: "01-01-2000",
    };
    setDataSource((pre) => {
      return [...pre, newBook];
    });
  };

  const onDeleteBook = (record) => {
    Modal.confirm({
      title: "Are you sure,you want to delete this Book Record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((book) => book.id !== record.id);
        });
      },
    });
  };
  const onEditBook = (record) => {
    setIsEditing(true);
    setEditingBook({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(null);
    setEditingBook(false);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <button
            type="button"
            className="btn btn-success my-3 mx-3 "
            onClick={onAddBook}
          >
            Add Book Details
          </button>
          <Table columns={columns} dataSource={dataSource}>
            {" "}
          </Table>

          <Modal
            title="Edit Book List"
            visible={isEditng}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
            onOk={() => {
              setDataSource((pre) => {
                return pre.map((book) => {
                  if (book.id === editingBook.id) {
                    return editingBook;
                  } else {
                    return book;
                  }
                });
              });
              resetEditing();
            }}
          >
            <input
              value={editingBook?.bookname}
              style={{ width: "450px", height: "50px", margin: "15px 0px" }}
              onChange={(e) => {
                setEditingBook((pre) => {
                  return { ...pre, bookname: e.target.value };
                });
              }}
            />
            <input
              value={editingBook?.authername}
              style={{ width: "450px", height: "50px", margin: "15px 0px" }}
              onChange={(e) => {
                setEditingBook((pre) => {
                  return { ...pre, authername: e.target.value };
                });
              }}
            />
            <input
              value={editingBook?.nop}
              style={{ width: "450px", height: "50px", margin: "15px 0px" }}
              onChange={(e) => {
                setEditingBook((pre) => {
                  return { ...pre, nop: e.target.value };
                });
              }}
            />
            <input
              value={editingBook?.price}
              style={{ width: "450px", height: "50px", margin: "15px 0px" }}
              onChange={(e) => {
                setEditingBook((pre) => {
                  return { ...pre, price: e.target.value };
                });
              }}
            />
            <input
              value={editingBook?.dop}
              style={{ width: "450px", height: "50px", margin: "15px 0px" }}
              onChange={(e) => {
                setEditingBook((pre) => {
                  return { ...pre, dop: e.target.value };
                });
              }}
            />
          </Modal>
        </header>
      </div>
    </>
  );
}

export default App;
