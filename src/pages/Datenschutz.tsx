import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO />
      <StructuredData />
      <div className="bg-black text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition mb-4">
            <ArrowLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
              sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
            <h4 className="font-bold text-gray-900 mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <h4 className="font-bold text-gray-900 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
              sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <h4 className="font-bold text-gray-900 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="font-bold text-gray-900 mb-2">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
              Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
              Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hosting</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">[Platzhalter Hosting-Anbieter]</h3>
            <p className="text-gray-700 leading-relaxed">
              [Detaillierte Informationen zum Hosting-Anbieter und zur Datenverarbeitung]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
              nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Solar Black Panther GmbH<br />
              Scheffelstr 60<br />
              76135 Karlsruhe<br />
              <br />
              Telefon: 0721 123 456 78<br />
              E-Mail: info@solar-black-panther.de
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
              mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
              Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Speicherdauer</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung
              nach Fortfall dieser Gründe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und
              richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die
              Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
              gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente
              Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine
              automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plugins und Tools</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Maps</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
              Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und
              dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ihre Rechte</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie haben das Recht:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu verlangen</li>
              <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Die Löschung Ihrer Daten zu verlangen</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen</li>
              <li>Der Verarbeitung zu widersprechen</li>
              <li>Auf Datenübertragbarkeit</li>
              <li>Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
            </ul>
          </section>

          <p className="text-sm text-gray-600 mt-8">
            Stand: Januar 2024
          </p>
        </div>
      </div>
    </div>
  );
}
