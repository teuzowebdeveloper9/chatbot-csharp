export default function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-end w-full">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-xl max-w-[70%] break-words">
        {content}
      </div>
    </div>
  );
}
