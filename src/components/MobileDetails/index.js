import { React, useEffect, useState, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import "./style.css";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";

export default function MobileDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://front-test-api.herokuapp.com/api/product/${id}`).then(
      (res) => res.json()
    )
  );

  const mutation = useMutation((newProduct) => {
    fetch(`https://front-test-api.herokuapp.com/api/cart`, {
      method: "POST",
      body: JSON.stringify(newProduct),
    }).then((res) => console.log(res.json()));
  });

  const [selectedStorage, setSelectedStorage] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const options = data?.options;
  const storages = useMemo(() => options?.storages ?? [], [options]);
  const colors = useMemo(() => options?.colors ?? [], [options]);

  useEffect(() => {
    if (colors[0]?.code) setSelectedColor(colors[0].code);
    if (storages[0]?.code) setSelectedStorage(storages[0].code);
  }, [storages, colors]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  function createData(features, dates) {
    return { features, dates };
  }

  const handleSelectColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSelectStorage = (e) => {
    setSelectedStorage(e.target.value);
  };

  const rows = [
    createData("Marca", data.brand),
    createData("Modelo", data.model),
    createData("precio", data.price),
    createData("Iso", data.os),
    createData("Peso", data.weight),
    createData("Resolución de pantalla", data.displayResolution),
    createData("Ram", data.ram),
    // eslint-disable-next-line
    createData(
      "Cámaras",
      "   trasera:   " +
        data.primaryCamera +
        "  ~\n  " +
        "   Frontal:   " +
        data.secondaryCmera
    ),
    createData("Dimensiones", data.dimentions),
    createData("CPU", data.cpu),
    createData("Batería", data.battery),
  ];

  const handleAddToCart = async () => {
    await mutation.mutate({
      id,
      colorCode: parseInt(selectedColor),
      storageCode: parseInt(selectedStorage),
    });
  };

  return (
    <div className="show-product">
      <div className="container">
        <div className="container-2">
          <img className="product-img" src={data.imgUrl} alt="img" />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="bodyclass">
          <h5>Características</h5>
          <Table
            sx={{ maxHeight: 50 }}
            aria-label="custom pagination table"
            className="table"
          >
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.features}>
                  <TableCell>{row.imgUrl}</TableCell>
                  <TableCell>{row.features}</TableCell>
                  <TableCell style={{ width: 800 }} align="right">
                    {row.dates}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>
            <h5>Colores</h5>
            <div className="storages_list">
              {colors.map((color) => (
                <label className="label">
                  <input
                    key={color.code}
                    type="radio"
                    value={color.code}
                    name="color"
                    defaultChecked={selectedColor === color.code}
                    onChange={handleSelectColor}
                  />{" "}
                  {color.name}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h5>Almacenamiento</h5>
            <div className="storages_list">
              {storages.map((storage) => (
                <label className="label">
                  <input
                    key={storage.code}
                    type="radio"
                    value={storage.code}
                    name="storage"
                    defaultChecked={selectedStorage === storage.code}
                    onChange={handleSelectStorage}
                  />{" "}
                  {storage.name}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
