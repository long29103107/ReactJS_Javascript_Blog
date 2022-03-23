import TopNews from 'features/Home/components/TopNews'
import TabNews from 'features/Home/components/TabNews'
import MainNews from 'features/Home/components/MainNews'
import CategoryNews from 'features/Home/components/CategoryNews';
import { Container, Row } from 'reactstrap';

function Main() {
  return (
  <>
      <TopNews />
      <div className="cat-news">
        <Container>
          <Row>
            <CategoryNews />
            <CategoryNews />
          </Row>
        </Container>
      </div>
      <TabNews />
      <MainNews />
    </>
  );
}
export default Main;