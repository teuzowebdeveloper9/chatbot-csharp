export default function BotMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-start w-full">
      <div className="bg-gray-700 text-white px-4 py-2 rounded-xl max-w-[70%] break-words">
        {content}
      </div>
    </div>
  );
}
