import React from 'react';
import { useLocation } from 'react-router-dom';
import farming from '../../assets/pictures/farming.png';
import { Container } from './Cultivation.styles';
import BlogContent from '../../components/blog-content/BlogContent.component';
import Subscribe from '../../components/subscribe/Subscribe.component';

const Cultivation = () => {
  const location = useLocation();
  return (
    <Container>
      <BlogContent
        path={location.pathname}
        heading="Learn how Agro-products are cultivated, and made ready for export"
        caption="A dive into the various cultivation processes of some common agro-products and how they are prepared for export."
        author="Samson Opeyemi"
        date="15 September, 2022"
        coverImg={farming}
        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra velit nunc proin pellentesque arcu velit et. Tellus congue felis pulvinar sed et facilisis quam arcu. Augue enim elit velit porttitor quisque tincidunt. Amet imperdiet aliquam eu sed euismod nisl donec pharetra ut. Pellentesque ornare lacus, lacus iaculis morbi ut. Purus blandit ac cras porttitor diam. Nunc augue elit quisque aliquam. Vulputate augue dictumst morbi nibh. A, at in eget orci accumsan vulputate. Odio odio nascetur congue amet, nulla gravida. Leo posuere cursus hendrerit at eu lacinia quisque turpis.
        Tellus dui donec tincidunt integer adipiscing et morbi morbi. Id leo non arcu dignissim nisi. In a accumsan, enim adipiscing egestas. Egestas aliquet arcu feugiat purus lorem. Varius vitae gravida et nec, faucibus porttitor nunc, porttitor. Tellus blandit tortor rhoncus tortor gravida dui, in dis bibendum. Nibh dolor faucibus sed consequat, tristique posuere feugiat sed senectus. Enim, sagittis, eu dictum et purus aliquet eros arcu mi. Massa, lorem quam netus vel.
        A nisl eget sit viverra sit tristique tempor massa. Id pulvinar luctus eget pellentesque egestas justo, sed ac, nec. At imperdiet egestas ut condimentum vel. Felis nisi egestas adipiscing sagittis adipiscing maecenas tempor rhoncus sed. Pellentesque ut urna mi at nunc, commodo lacus. Consequat, consectetur elementum et quis nunc, in lobortis. Porta pellentesque aenean odio suspendisse ac condimentum habitasse.
        Facilisi pellentesque morbi ante maecenas ultricies sit habitant. Tellus id sed suspendisse auctor. Tellus ac congue etiam elit. Enim mauris est aliquet nulla. Sed adipiscing sagittis nunc enim sed a leo, sed. Amet gravida sollicitudin eleifend pharetra. Nibh eget cras aliquet vitae non. Enim enim phasellus justo pretium tristique. Neque pulvinar pellentesque volutpat nulla tincidunt scelerisque feugiat interdum eu.
        Odio vel non hac justo, vel vel dignissim pellentesque. Mi nisl tempus non in pretium. Neque tempus tortor tempor proin erat sed ipsum sit urna. Quis curabitur enim senectus amet venenatis, lobortis euismod vivamus. Congue magna quis nulla molestie scelerisque id iaculis tincidunt quisque. Mauris leo ultrices sed faucibus eu, senectus ut. At posuere morbi aliquet netus arcu aliquet. Sit convallis nulla morbi feugiat faucibus tempus turpis sit. Ut volutpat blandit nunc ac enim lorem. Nunc habitant vitae euismod nibh euismod tortor augue. Vel id eu morbi in. Felis vitae malesuada lorem interdum at elementum enim scelerisque sodales.
        Quam mattis donec justo, ultricies enim quam dignissim lacinia at. Feugiat arcu nisl, at volutpat enim vitae quis massa lectus. Quis vitae integer turpis quis semper pulvinar. Lectus sed ut enim sem urna augue. At lacus, urna tellus diam accumsan morbi eget egestas ullamcorper. Feugiat a tincidunt dapibus egestas. Varius facilisi malesuada sed ut venenatis ut nunc imperdiet. Amet adipiscing aliquet arcu tempor, consequat velit porttitor sagittis magna. Blandit et etiam commodo in duis adipiscing etiam tortor non. Et nullam pulvinar pharetra purus. Et commodo morbi adipiscing est amet diam morbi.
        Diam leo vitae risus, auctor porttitor cursus. Vestibulum tincidunt dictumst pretium erat posuere. Nibh at urna enim ultrices arcu scelerisque ultricies lacus, sit. Adipiscing auctor natoque quisque venenatis habitant sit. Viverra sed nisi, pretium quis. Morbi curabitur vitae, leo neque justo dictum aliquam. Eu diam adipiscing suscipit dui in feugiat turpis convallis donec. In et enim, pellentesque ornare.
        Iaculis netus mauris lorem purus, eget. Ut vitae mauris nec massa porta. Vitae in ac, facilisi elit. Molestie lectus in nibh morbi tincidunt duis placerat at sed. Vulputate feugiat tortor tellus morbi. Tincidunt in aliquam eget hendrerit aliquet varius.
        Amet id malesuada at lorem neque. Augue quam pellentesque pharetra, blandit. Nulla felis et, dictumst morbi nec feugiat ligula cras iaculis. Quis morbi id id et dictum. Ipsum pretium nisi tellus cursus. Morbi elit, imperdiet dui sit odio venenatis ut. Vitae tincidunt morbi est a, in sed consequat.
        Iaculis netus in in vitae. Purus gravida nec tempor velit erat sed et id in. Sed pellentesque sodales aliquet facilisi tempus, purus. Pretium blandit et semper mollis amet. Adipiscing in fermentum et faucibus aliquam dictum. Mi bibendum in ultrices nisi nunc.
        Eros, elit sit dui, pretium tincidunt metus molestie magna iaculis. At sit gravida consectetur at gravida porttitor dolor sit. Nisi, tempor turpis venenatis amet eu, velit laoreet sit sed. Ullamcorper."
      />
      <Subscribe />
    </Container>
  );
};

export default Cultivation;
