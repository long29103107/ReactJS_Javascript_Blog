
import { Container, Col, Row } from 'reactstrap'
import ContentBlogDetail from 'features/BlogDetail/components/ContentBlogDetail'
import RelatedBlogDetail from 'features/BlogDetail/components/RelatedBlogDetail'
import SidebarsBlogDetail from 'features/BlogDetail/components/SidebarsBlogDetail';

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