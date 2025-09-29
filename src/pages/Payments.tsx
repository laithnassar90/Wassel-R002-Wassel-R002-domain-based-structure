import { CreditCard, Plus, Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/stores/appStore';

const mockTransactions = [
  {
    id: '1',
    type: 'payment',
    description: 'Trip to Abu Dhabi with Ahmed Al-Rashid',
    amount: -45,
    date: '2024-01-10',
    status: 'completed',
  },
  {
    id: '2',
    type: 'refund',
    description: 'Refund for cancelled trip',
    amount: 30,
    date: '2024-01-08',
    status: 'completed',
  },
  {
    id: '3',
    type: 'payment',
    description: 'Trip to Jeddah with Sara Mohammed',
    amount: -120,
    date: '2024-01-05',
    status: 'completed',
  },
  {
    id: '4',
    type: 'deposit',
    description: 'Wallet top-up',
    amount: 200,
    date: '2024-01-01',
    status: 'completed',
  },
];

const mockPaymentMethods = [
  {
    id: '1',
    type: 'card',
    last4: '4242',
    brand: 'Visa',
    isDefault: true,
  },
  {
    id: '2',
    type: 'card',
    last4: '8888',
    brand: 'Mastercard',
    isDefault: false,
  },
];

export function Payments() {
  const { walletBalance } = useAppStore();

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <ArrowUpRight className="h-4 w-4 text-destructive" />;
      case 'refund':
      case 'deposit':
        return <ArrowDownLeft className="h-4 w-4 text-success" />;
      default:
        return <CreditCard className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-3 shadow-lg border border-gray-200">
            <img 
              src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png" 
              alt="Wassel Logo" 
              className="w-full h-full object-contain filter contrast-125 brightness-110"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="font-headline font-bold text-3xl wassel-text-gradient">Payments</h1>
              <span className="text-xl arabic font-arabic text-wassel-gray">المدفوعات</span>
            </div>
            <p className="text-muted-foreground">Manage your wallet and payment methods</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Balance */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Wallet className="h-5 w-5" />
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">${walletBalance}</div>
              <p className="text-sm text-muted-foreground">Available balance</p>
            </div>
            <Button className="w-full wassel-button-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Funds
            </Button>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Payment Methods</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Card
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockPaymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 wassel-gradient rounded flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {method.brand} •••• {method.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.type === 'card' ? 'Credit Card' : 'Debit Card'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {method.isDefault && (
                    <Badge className="bg-wassel-teal text-white">Default</Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-muted">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.amount > 0 ? 'text-success' : 'text-foreground'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                  </p>
                  <Badge
                    variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                    className={
                      transaction.status === 'completed'
                        ? 'bg-success text-success-foreground'
                        : 'bg-muted text-muted-foreground'
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
