import LinkCard from '../../components/Cards/LinkCard';
import Section from '../../components/Generics/Section/Section';
const Home = () => {
  return (
    <>
      <Section>
        Welcome to <span>Chef Selection</span>! Here, you'll discover a feast of
        flavors, a blend of traditional recipes and innovative creations that
        will delight your senses. Join us on a culinary journey brimming with
        passion and taste, where each dish tells a story.
      </Section>
      <Section className="my-4 p-4 flex flex-col gap-4 ">
        <LinkCard
          alt="recipes category"
          image="/src/assets/images/cat/recipeBook.webp"
          title="Recipes"
          to="recipes"
        />
        <LinkCard
          alt="Tips & Tricks category"
          image="/src/assets/images/cat/cutting.webp"
          title="Tips & Tricks"
          imageClassName="[&>img]:object-bottom"
          to="techniques"
        />
        <LinkCard
          alt="recipes category"
          image="/src/assets/images/cat/ingredients.webp"
          title="Ingredients"
          to="ingredients"
        />
        <LinkCard
          alt="recipes category"
          image="/src/assets/images/cat/station.webp"
          title="On season"
          to=""
        />
      </Section>
    </>
  );
};

export default Home;
