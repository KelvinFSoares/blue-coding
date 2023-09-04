import { useQuery } from 'react-query';

export const Home = () => {
  const exampleQuery = useQuery({
    queryKey: [''],
    queryFn: () => {},
    enabled: false,
  });

  if (exampleQuery.status === 'error') {
    return <h1>{JSON.stringify(exampleQuery.error)}</h1>;
  }

  return (
    <div className="container border w-full h-full mt-16 mx-auto flex flex-col items-center justify-center p-10">
      <h1 className="text-xl font-bold">Welcome</h1>
    </div>
  );
};
