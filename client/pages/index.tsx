import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="center">
        <h2>Main page</h2>
        <h3>Best music platform</h3>
      </div>
      <style jsx>
        {`
          .center {
            margin-top: 100px;
            text-align: center;
          }
        `}
      </style>
    </MainLayout>
  );
};

export default Index;
