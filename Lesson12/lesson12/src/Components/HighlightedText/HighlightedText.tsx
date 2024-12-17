import './HighlightedText.css';

export default function HighlightedText({ children }: { children: any }) {
  return <p className='highlighted'>{children}</p>;
}
