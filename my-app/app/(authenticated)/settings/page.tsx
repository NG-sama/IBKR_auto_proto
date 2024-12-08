import SettingsHeader from '@/components/settings/SettingsHeader'
import AccountSettings from '@/components/settings/AccountSettings'
import NotificationSettings from '@/components/settings/NotificationSettings'
import SecuritySettings from '@/components/settings/SecuritySettings'
import ApiKeySettings from '@/components/settings/ApiKeySettings'

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <SettingsHeader />
      <div className="space-y-6">
        <AccountSettings />
        <NotificationSettings />
        <SecuritySettings />
        <ApiKeySettings />
      </div>
    </div>
  )
}

