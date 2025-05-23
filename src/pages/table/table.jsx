import React, { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import LoadingItem from "../../Components/LoadingItem/LoadingItem";
import "../Table/Table.scss";

const Table = () => {
  const [words, setWords] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentEdit, setCurrentEdit] = useState({
    english: "",
    russian: "",
    transcription: "",
  });

  useEffect(() => {
    fetch("https://itgirlschool.justmakeit.ru/api/words")
      .then((res) => res.json())
      .then((data) => {
        setWords(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingItem />;
  const handleEdit = (id) => {
    const wordToEdit = words.find((word) => word.id === id);
    setCurrentEdit({
      word: wordToEdit.word,
      translation: wordToEdit.translation,
      transcription: wordToEdit.transcription,
    });
    setEditingId(id);
  };

  const handleSave = (id) => {
    const updatedWords = words.map((word) =>
      word.id === id ? { ...word, ...currentEdit } : word
    );
    setWords(updatedWords);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setCurrentEdit({ word: "", translation: "", transcription: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Transcription</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>
                {editingId === word.id ? (
                  <input
                    name="word"
                    type="text"
                    value={currentEdit.word}
                    onChange={handleChange}
                  />
                ) : (
                  word.english
                )}
              </td>
              <td>
                {editingId === word.id ? (
                  <input
                    name="translation"
                    type="text"
                    value={currentEdit.translation}
                    onChange={handleChange}
                  />
                ) : (
                  word.russian
                )}
              </td>
              <td>
                {editingId === word.id ? (
                  <input
                    name="transcription"
                    type="text"
                    value={currentEdit.transcription}
                    onChange={handleChange}
                  />
                ) : (
                  word.transcription
                )}
              </td>
              <td>
                {editingId === word.id ? (
                  <>
                    <button
                      className="btn-save"
                      onClick={() => handleSave(word.id)}
                    >
                      <FcOk />
                      Save
                    </button>
                    <button className="btn-cancel" onClick={handleCancel}>
                      <MdCancel />
                    </button>
                  </>
                ) : (
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(word.id)}
                  >
                    <MdModeEdit />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
