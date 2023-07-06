import styled from "styled-components";

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid pink;
`;
const CoverImage = styled.img`
  height: 302px;
  object-fit: cover;
`;
const MovieInfo = (props) => {
  //const { Title, Year, Poster, imdbID, Type } = props.movie;
  return <ContainerInfo>Seema</ContainerInfo>;
};
export default MovieInfo;
