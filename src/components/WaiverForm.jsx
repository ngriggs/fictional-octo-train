import React from 'react'

const WaiverForm = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Risk Acknowledgement and Waiver</h1>
        </div>
        <div>
          <p className='py-2'>
            I hereby acknowledge, agree and accept the risk of injury and/or
            health illness inherent in any physical activity, program or class
            offered by or at WeOrbit, LLC. Such risks include but are not
            limited to falling, bumping, risks from abrasions, scrapes, cuts,
            broken, sprained or bruised limbs, and even serious injuries as
            paralysis or death, as well as risk from the actions or omission of
            others.{' '}
          </p>
          <p className='py-2'>
            I hereby acknowledge that any inappropriate behavior, such as, but
            not limited to, harassment, physical or health endangerment of self
            or another person, or foul language will result in the immediate
            removal from the premises. I hereby release and discharge WeOrbit,
            LLC, its members, managers, affiliates, agents, employees,
            contractors, successors and assigns, from any and all injury,
            illness, medical conditions, damages, claims, liabilities, expenses
            or judgments, including attorney’s fees and court costs resulting
            from my participation in an activity, program or class at WeOrbit,
            LLC.{' '}
          </p>
          <p className='py-2'>
            I hereby indemnify and hold harmless WeOrbit, LLC, its members,
            managers, affiliates, agents, employees, contractors, successors and
            assigns, from and against any and all injuries, illnesses, medical
            conditions, damages, claims, liabilities, expenses or judgments,
            including attorney’s fees and court costs resulting from any
            negligent or deliberate act or omission of my child(ren), caregiver
            or myself.{' '}
          </p>
          <p className='py-2'>
            I understand the play area may contain activities, programs or
            classes that may be physically strenuous and I voluntarily
            participate in them with full knowledge that there is risk of
            personal injury, property loss or death. I agree that neither I, my
            heirs, assigns or legal representatives will sue or make any claims
            of any kind against WeOrbit, LLC or its members, managers,
            affiliates, agents, employees, successors for any personal injury,
            property damage/loss, or wrongful death whether caused by negligence
            or otherwise.
          </p>
          <p className='py-2'>
            Parent Or Legal Guardian Certification And Consent: I hereby certify
            that I am the parent or legal guardian of the Child(ren) whose
            name(s) appears below, and I have authority to waive rights on
            behalf of the minor Child(ren). I understand that this is a
            permanent waiver to be kept on file by WeOrbit, LLC for today’s
            visit and all subsequent and future visits. I have informed myself
            on the contents of this Waiver from WeOrbit, LLC and hereby release
            from liability and indemnify WeOrbit, LLC after reading and signing
            this agreement.
          </p>
        </div>
        <div>
          <label htmlFor='fname'>Parent's First Name:</label>
          <input type='text' id='fname' />
          <label htmlFor='lname'>Parent's Last name:</label>
          <input type='text' id='lname' />
          <input type='text' />
        </div>
        <div>
          <label htmlFor='numberOfChildren'>Number of Children</label>
          <select name='numberOfChildren' id='numberOfChildren'>
            <option value='1 Child'>1 Child</option>
            <option value='2 Children'>2 Children</option>
            <option value='3 Children'>3 Children</option>
            <option value='4 Children'>4 Children</option>
          </select>
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone number</label>
          <input type='tel' />
        </div>
      </form>
    </div>
  )
}

export default WaiverForm
