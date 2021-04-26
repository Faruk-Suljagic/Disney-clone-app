import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommend from "./Recommend";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push(...recommends, { id: doc.id, ...doc.data() });
            break;

          case "new":
            newDisneys.push(...newDisneys, { id: doc.id, ...doc.data() });
            break;

          case "trending":
            trending.push(trending, { id: doc.id, ...doc.data() });
            break;

          case "originals":
            originals.push(originals, { id: doc.id, ...doc.data() });
            break;
        }
      });
    });
    dispatch(
      setMovies({
        recommend: recommends,
        newDisneys: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(2.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
