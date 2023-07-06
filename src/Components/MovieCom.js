import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  height: 332px;
  object-fit: cover;
`;
const MovieName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis; 
`;
const InfoCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieCom = (props) => {
  const { Title, Year, Poster, imdbID, Type } = props.movie;
  return (
    <MovieContainer onClick={() => props.setSelectedMovie(imdbID)}>
      <CoverImage src={Poster} />
      <MovieName>{Title}</MovieName>
      <InfoCol>
        <span>Year:{Year}</span>
        <span>Type:{Type}</span>
      </InfoCol>
    </MovieContainer>
  );
};
export default MovieCom;
