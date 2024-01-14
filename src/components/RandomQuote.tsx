import { getRandomQuote } from '@/.includes/quotes';

export default function RandomQuote() {
  const quote = getRandomQuote();

  return (
    <div className='m-3 w-[275px]'>
      <h3 className="font-semibold mb-2">Inspiration wrapped in a quote</h3>
      <div className="chat chat-start max-w-sm">
        {quote.authorImageUrl && (
          <div className="chat-image avatar w-12 mask mask-squircle">
            <img src={quote.authorImageUrl} />
          </div>
        )}
        <div className="chat-bubble bg-success text-success-content text-sm">{quote.quote}</div>
        <div className="chat-footer flex flex-row gap-1 place-items-center">
          <span>{quote.author}</span>
        </div>
      </div>
    </div>
  );
}
