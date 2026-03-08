const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <h1>USER DETAILS PAGE of user {id}</h1>;
};

export default page;
