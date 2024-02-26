import HomeScreen from '@/screens/App/Home';

const HomePage = async () => {
  const categoriesResponse = await fetch(
    `http://localhost:4000/categories/therapists`,
  );
  const categories = await categoriesResponse.json();

  const therapistsResponse = await fetch('http://localhost:4000/therapist');
  const therapists = await therapistsResponse.json();

  return (
    <HomeScreen categories={categories} therapists={therapists?.content} />
  );
};

export default HomePage;
