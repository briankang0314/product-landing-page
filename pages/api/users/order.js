import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Construct the file path
    const filePath = path.resolve('.', 'orders.json');
    
    // Read existing orders
    let orders = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      orders = JSON.parse(data);
    }

    // Add the new order to the orders array
    orders.push(req.body);

    // Write the updated orders back to the file
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), 'utf8');

    // Respond to the request indicating success
    res.status(200).json({ status: 'Order saved successfully' });
  } else {
    // Handle any requests that aren't POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
