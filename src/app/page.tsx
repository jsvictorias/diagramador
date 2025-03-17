import './globals.css';
import Link from 'next/link';
import Graduacao from './Graduacao/page';
export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Graduacao />
    </div>
  );
}