CREATE DATABASE qlnv;

USE qlnv;

CREATE TABLE chucvu (
	macv INT(3) PRIMARY KEY,
    chucvu VARCHAR(50)
);

CREATE TABLE donvi (
	madv INT(3) PRIMARY KEY,
    donvi VARCHAR(40)
);

CREATE TABLE nhanvien (
	manv INT(5) PRIMARY KEY,
    hoten VARCHAR(50),
    namsinh DATE,
    gioitinh VARCHAR(3),
    macv int(3),
    madv int(3),
    FOREIGN KEY (macv) REFERENCES chucvu(macv),
    FOREIGN KEY (madv) REFERENCES donvi(madv),
    luong int(5)
);

INSERT INTO chucvu (macv, chucvu) VALUES (001, "Giam Doc");
INSERT INTO chucvu (macv, chucvu) VALUES (002, "Truong Phong Ke Toan");
INSERT INTO chucvu (macv, chucvu) VALUES (003, "Giam Doc Nhan Su");
INSERT INTO chucvu (macv, chucvu) VALUES (004, "Truong Phong Hanh Chanh");
INSERT INTO chucvu (macv, chucvu) VALUES (005, "Giam Doc Ky Thuat");
INSERT INTO chucvu (macv, chucvu) VALUES (006, "Nhan Vien");

INSERT INTO donvi (madv, donvi) VALUES (001, "Ban Giam Doc");
INSERT INTO donvi (madv, donvi) VALUES (002, "phong Ke Toan");
INSERT INTO donvi (madv, donvi) VALUES (003, "Phong Nhan Su");
INSERT INTO donvi (madv, donvi) VALUES (004, "Phong Hanh Chanh");
INSERT INTO donvi (madv, donvi) VALUES (005, "Phong Ky Thuat");

INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00001, "Do Thanh Nghi", "1974-02-12", "Nam", 005, 006, 1200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00002, "Nguyen Van Tuyen", "1980-04-22", "Nam", 005, 005, 1500);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00003, "Nguyen Thanh Binh", "1979-07-25", "Nam", 001, 001, 3200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00004, "Tran Trung Tinh", "1982-05-10", "Nu", 004, 004, 1600);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00005, "Phan Xuan Trang", "1982-08-07", "Nu", 004, 006, 1200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00006, "Bui Minh Quan", "1980-10-20", "Nam", 003, 003, 2200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00007, "Lam Thuc Hoa", "1976-09-15", "Nu", 003, 006, 1200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00008, "Luu Hy Phung", "1975-05-18", "Nu", 002, 002, 3200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00009, "Nguyen Manh Hung", "1967-09-21", "Nam", 002, 006, 1200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00010, "Nguyen An Phuoc", "1977-06-02", "Nam", 005, 006, 1200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00011, "Tran Thanh Tung", "1978-07-28", "Nam", 005, 006, 1200);
INSERT INTO nhanvien (manv, hoten, namsinh, gioitinh, madv, macv, luong) VALUES (00012, "Nguyen Xuan Huy", "1984-09-23", "Nam", 005, 006, 1200);

SELECT * FROM nhanvien;

SELECT nhanvien.hoten, nhanvien.namsinh
FROM nhanvien
WHERE nhanvien.namsinh > "1975-09-30";

SELECT nhanvien.hoten, nhanvien.luong
FROM nhanvien
WHERE nhanvien.luong > ALL (SELECT AVG(nhanvien.luong) FROM nhanvien);