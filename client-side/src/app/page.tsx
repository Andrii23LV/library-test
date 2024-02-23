import { Image, Space } from "antd";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Space direction="vertical">
        <Image preview={false} width={'100%'} height={700} src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="main" />
        <h1 className="text-6xl text-zinc-500">Discover, add own <span className="text-blue-600">book</span> collection.</h1>
      </Space>
    </main>
  );
}
