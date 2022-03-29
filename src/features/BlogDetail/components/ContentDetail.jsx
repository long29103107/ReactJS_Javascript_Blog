
import { Container, Col, Row } from 'reactstrap'
import ContentBlogDetail from './ContentBlogDetail'
import RelatedBlogDetail from './RelatedBlogDetail'
import SidebarsBlogDetail from './SidebarsBlogDetail';

function ContentDetail() {
  return (
    <div className="single-news">
      <Container>
        <Row>
          <Col lg="8">
            <ContentBlogDetail/>
            <RelatedBlogDetail />
          </Col>
          <Col lg="4">
          <SidebarsBlogDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentDetail;