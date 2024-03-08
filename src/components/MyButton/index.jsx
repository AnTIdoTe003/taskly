/* eslint-disable react/prop-types */

const MyButton = ({ myText, hidden, background }) => {
  return (
    <>
      {hidden ? null : (
        <button
          style={{
            background: background,
          }}
        >
          {myText}
        </button>
      )}
    </>
  );
};

export default MyButton;
